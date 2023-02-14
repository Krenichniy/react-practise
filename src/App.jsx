// import paintings from './paintings.json';
import events from './upcoming-event.json';
import PageTitle from 'components/PageTitle/PageTitle';
import EventBoard from 'components/EventsBoard/EventBoard';
// import PaintingList from "./components/PaintingList";
// import Section from './components/Section';
const App = () => {
    return (
        <div>
            {/* <Section title="Top of week">
                <PaintingList items={paintings } />
            </Section> */}
            <PageTitle text="24th Core Worlds Coalition Conference" />
            <EventBoard events={events} />
        </div>
    )
}
export default App;