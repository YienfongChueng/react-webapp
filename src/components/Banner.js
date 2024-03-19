import {useState,useEffect} from 'react'
export default function Banner({banner}){
    const [curIndex,setCurIndex] = useState(0)
    
    const changeCurIndex = (i) => {
        setCurIndex(i)
    }

    // 定时器任务
    useEffect(()=> {
        const timmer = setInterval(() => {
            setCurIndex(i => {
                if(i === banner.length - 1) return 0
                return i+1
            })
        }, 2000);
        return () => clearInterval(timmer)
    },[banner]) // 定时器依赖banner


    return (
        <div className="banner">
            {/* 图片轮播 */}
            <div className="banner-img">
                {
                    banner.map((item,i) => (
                        <img 
                        key={item.id} 
                        src={item.url} 
                        style={{display:curIndex === i ? 'block' : 'none'}} />
                    ))
                }
            </div>
            {/* 指示器 */}
            <ul>
                {banner.map((item,i)=> (
                    <li 
                        key={item.id} 
                        className={curIndex === i ? 'selected' : ''}
                        onClick={()=> changeCurIndex(i)}>
                    </li>
                ))}
            </ul>
        </div>
    )
}