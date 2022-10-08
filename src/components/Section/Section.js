import './sectionStyles.css'

export default function Section() {
    return(
        <div className='sectionContainer shadow'>
            <div>
                <h4>{this.props.title}</h4>
            </div>
        </div>
    )
}