import { useState } from 'react'
function useUpdate() {
    const [, setState] = useState({})
    return () => setState({})
}
export default useUpdate