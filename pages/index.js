import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://lh3.googleusercontent.com/IZ6z2jWs8gdIarVyMX440QBHMU9woEgpwG94v-d5eRxsJFHyqBTeJxt04Fs86WYqOGQ3ZOyrTu4-VzoarHeF2mYA=w640-h400-e365-rj-sc0x00ffffff',
        address: 'Some address 5, 1234 Some City',
        description: 'This is the first meetup'
    }
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUP}/>
}

export default HomePage;