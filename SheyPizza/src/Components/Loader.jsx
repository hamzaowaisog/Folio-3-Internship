import {Spin} from 'antd';
import {LoadingOutlined} from '@ant-design/icons'
import "../CSS/loader.css"
export default function Loader() {
    return(
        <>
    <div className='loader'>
        <Spin indicator={<LoadingOutlined spin/>} className='custom' size="large" />
    </div>
    </>
    )
}