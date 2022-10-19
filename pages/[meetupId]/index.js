import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image="https://lh3.googleusercontent.com/IZ6z2jWs8gdIarVyMX440QBHMU9woEgpwG94v-d5eRxsJFHyqBTeJxt04Fs86WYqOGQ3ZOyrTu4-VzoarHeF2mYA=w640-h400-e365-rj-sc0x00ffffff"
            title='First Meetup'
            address="Some st"
            description="fgfdgfdgdfgdfgdf"
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    console.log(meetupId)

    return {
        props: {
            meetupData: {
                id: 'm1',
                title: 'First meetup',
                image: 'https://lh3.googleusercontent.com/IZ6z2jWs8gdIarVyMX440QBHMU9woEgpwG94v-d5eRxsJFHyqBTeJxt04Fs86WYqOGQ3ZOyrTu4-VzoarHeF2mYA=w640-h400-e365-rj-sc0x00ffffff',
                address: 'Some st',
                description: 'fgfdgfdgdfgdfgdf'
            }
        }
    }
}

export default MeetupDetails;