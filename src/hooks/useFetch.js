import { useEffect } from 'react';

const useFetch = (asyncCallBack) => {
  useEffect(() => {
    const fetchData = async () => {
      await asyncCallBack()
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useFetch