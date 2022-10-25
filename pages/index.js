import Head from 'next/head';
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";


function HomePage(props) {
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta name='description' content='Browse a huge list of highly active React meetups!'></meta>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </>
    )
}

export async function getStaticProps() {
    const client = await MongoClient.connect("mongodb://localhost:27017/meetups");
    const db = client.db();
    const meetupCollection = db.collection('meetups');

    const meetups = await meetupCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map(meetup=>({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1
    }
} 

export default HomePage;