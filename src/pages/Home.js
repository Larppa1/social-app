import Header from "../components/Header/Header"
import Section from '../components/Section/Section'

export default function Home() {
    return(
        <div className="homeContainer">
            <Header />
            <div className="sectionContainer">
                <Section title="Trending" />
                <Section title="Recommended" />
                <Section title="Friends" />
            </div>
        </div>
    )
}