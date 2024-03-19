import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom' 
import { getCategorygoods } from '../api'
export default function List({id}){
    const [list,setList] = useState([])
    const navigate = useNavigate();
    useEffect(()=> {
        if(!id) return 
        getCategorygoods(id).then(res => {
            setList(res.data)

        })
    },[id])

    const addCart = (e,item) => {
        console.log('addCart:',item)
        e.stopPropagation() // 阻止冒泡
    }

    const toDetail = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div className="list-content">
            <ul>
                {list.map(item => (
                    <li key={item.product_id} onClick={()=> toDetail(item.product_id)}>
                        <img className="list-img" src={item.product_img_url} />
                        <div className="list-info">
                            <p>{item.product_name}</p>
                            <div>
                                <span className="product_uprice">¥{item.product_uprice}</span>
                                <span className="product_price">¥{item.product_price}</span>
                                <i className="iconfont icon-gouwuche list-cart" onClick={(e)=> addCart(e,item)}></i>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}