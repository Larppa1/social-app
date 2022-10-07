import Header from "../components/Header"
import Section from '../components/Section/Section'

export default function Home() {
    return(
        <div className="container">
            <Header />
            <div className="contentContainer">
                <Section />
                <Section />
                <Section />
            </div>
        </div>
    )
}