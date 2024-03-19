import {useParams,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getDetail } from '../../api'
import Banner from '../../components/Banner'
export default function Detail() {
const params = useParams()
const [banner,setBanner] = useState([])
const [detailInfo,setDetailInfo] = useState({})
const navigate = useNavigate();

useEffect(()=> {
    getDetail(params.id).then(res => {
        const list = res.data[0].map(d => {
            return {
                id: Math.random(),
                url: d.image_url
            }
        })
        const arr = res.data[1]
        setBanner(list)
        setDetailInfo(arr[0])
    })
},[])

// todo 需要换状态共享方式实现
useEffect(() => {
    window.localStorage.setItem('navShow',false)
    return ()=> window.localStorage.setItem('navShow',true)
},[])

const goBack = ()=> {
    window.localStorage.setItem('navShow',true)
    navigate(-1);
}

    return (
        <>
            <div>
                <Banner banner={banner}/>
            </div>
            <div className="list-content detail-wrap">
                <h2>{detailInfo.product_name}</h2>
                <div className="detail-info">
                    <span className="product_uprice">¥{detailInfo.product_uprice}</span>
                    <span className="product_price">¥{detailInfo.product_price}</span>
                    <span className="product_num">库存：{detailInfo.product_num}</span>
                </div>
                <p>{detailInfo.product_detail}</p>
            </div>
            <div className="back-btn" onClick={goBack}>返回</div>

        </>
    )
}