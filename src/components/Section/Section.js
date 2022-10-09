import './sectionStyles.css'
import Content from '../Content/Content'

export default function Section(props) {
    return(
        <div className='sectionContainer shadow'>
            <div>
                <article className='prose'>
                    <h4>{props.title}</h4> 
                </article>
            </div>
            <div>
                <Content />
            </div>
        </div>
    )
}