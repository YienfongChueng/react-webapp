import {NavLink} from 'react-router-dom'
import {routes} from '../router'
export default function Nav(){

    return (
        <div className="footer">
          <div className="footer-seat">
            <div className="footer-lists">
              <ul>
                {
                  routes.filter(d => !d.meta.hidden).map(item => (
                    <li key={item.path}>
                      <NavLink to={item.path} className={({isActive})=> isActive ? 'selected' : ''}>
                        <i className={`iconfont ${item.meta.icon}`}></i>
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
    )

}