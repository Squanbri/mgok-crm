import React, {useContext, useEffect, useState} from 'react';
import {Paper, Table, TableBody, TableContainer} from "@mui/material";
import {useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";

import {Context} from "../../index";
import DirectionsHead from "./DirectionsHead";
import TableHeader from "./TableHeader";
import ModalCreate from "./ModalCreate";
import Direction from "./Direction";
import Loader from "../../components/Loader";
import Breadcrumbs from "./Breadcrumbs";

const Directions = observer(() => {
    const {id} = useParams();
    const {store} = useContext(Context)
    const [active, setActive] = useState(false)
    const speciality = store.specialities.speciality
    const isLoading = store.directions.isLoading

    useEffect(() => {
        const fetchData = async () => {
            await store.specialities.fetchSpeciality(id)
            await store.directions.fetchDirections(id)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (isLoading) {
        return (
            <>
                <Loader/>
            </>
        )
    }

    return (
        <section>
            <Breadcrumbs speciality={speciality}/>

            <DirectionsHead setActive={setActive} name={speciality?.name}/>
            <ModalCreate active={active} setActive={setActive} />

            <div className="speciality-body">
                <TableContainer
                    className="speciality-table"
                    component={Paper}
                    sx={{boxShadow: 0}}
                >
                    <Table>
                        <TableHeader/>
                        {console.log('render')}
                        <TableBody>
                            {store.directions.list.map(direction => (
                                <Direction direction={direction}  key={direction.id} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </section>
    );
});

export default Directions;