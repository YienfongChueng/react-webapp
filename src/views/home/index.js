import {useState,useEffect} from 'react'
import { getCategoryBanner,getSwiper } from '../../api'
import Banner from '../../components/Banner'
import List from '../../components/List'
export default function Home(){
    const [keyword,setKeyword] = useState('')
    const [category,setCategory] = useState([])
    const [banner,setBanner] = useState([])
    const [cateId,setCateId] = useState('')

    // 获取数据
    useEffect(()=> {
        getBannerImg()
        getCategoryList()
    },[])

    // 获取分类
    const getCategoryList = ()=> {
        getCategoryBanner().then(res => {
            setCategory(res.data)
            const cid = window.localStorage.getItem('cid')
            setCateId(cid || res.data[0].category_id) // 默认第一个
        })
    }

    // 获取轮播数据
    const getBannerImg = ()=> {
        getSwiper().then(res => {
            const list = res.data.map(item => {
                return {
                 id: item.id,
                 url: item.img_url
                }
             })
            setBanner([...list])
        })
    }

    // todo 需要防抖 
    function handleSearch(e) {
        console.log('e.target.value:',e.target.value)
        setKeyword(e.target.value)
    }

    // 点击分类获取列表数据
    function changeCategory(cid) {
        setCateId(cid)
        window.localStorage.setItem('cid',cid)
    }

    const imgList = category.map(item => (
        <li key={item.category_id} onClick={()=> changeCategory(item.category_id)}>
            <img src={item.img}/>
            <p>{item.category_name}</p>
        </li>
    ))
    return (
        <>
            {/* 搜索 */}
            <div className="search">
                <i className="iconfont icon-sousuo"></i>
                <input className="input" value={keyword} onChange={e => handleSearch(e)} placeholder='搜索你感兴趣的内容' />
            </div>
            {/* 轮播 */}
            <Banner banner={banner}/>
            {/* 分类 */}
            <div className="nav">
                <ul>
                    {imgList}
                </ul>
            </div>
            {/* 列表 */}
            <List id={cateId}/>
        </>
    )
}