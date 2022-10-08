import './sectionStyles.css'

export default function Section(props) {
    return(
        <div className='sectionContainer shadow'>
            <div>
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}