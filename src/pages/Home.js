import Header from "../components/Header/Header"
import Section from '../components/Section/Section'
import Content from '../components/Content/Content'

export default function Home() {
    return(
        <div className="homeContainer">
            <Header />
            <div className="contentContainer">
                <Section title="Trending">
                    <Content />
                </Section>
                <Section title="Recommended" />
                <Section title="Friends" />
            </div>
        </div>
    )
}