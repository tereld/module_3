import React,{useRef} from 'react';

const SearchStudent = ({onSearch, onReset})=>{
    const nameRef = useRef();
    const handleSearch = ()=>{
        const name= nameRef.current.value;
        onSearch(name)
    }
    return (
        <>
        <form style={{margin: '3px 0'}}>
            <input style={{margin: '0 10px'}} ref={nameRef} className={' w-25'} type='text' placeholder='Nhập tên cần tra'/>
            <button onClick={handleSearch} className='btn btn-warning btn-sm pr-5 mr-3' type='button' style={{margin: '10px'}}>Search</button>
            <button onClick={onReset} className='btn btn-sm bg-danger' type='button'>Reset</button>
        </form>
        </>
    )
}
export default SearchStudent;