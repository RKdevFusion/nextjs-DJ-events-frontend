import EventItem from "@/components/EventItem"
import Layout from "@/components/Layout"
import { API_URL, PER_PAGE } from "@/config/index"
import Pagination from "@/components/Pagination"
export default function EventsPage({events, page, total}) {

  return (
    <Layout>
      <h1>Events</h1>
      {(events.length === 0 || events == undefined) && <h3>No events to show!</h3>}
      {events.map((evt)=> (
        <EventItem key={evt.id} evt={evt}/>
      ))}
<Pagination page={page} total={total}/>
     
    </Layout>
  )
}

export async function getServerSideProps({query: {page=1}}){
  // calculate start page
  const start = +page === 1 ? 0 : (+page - 1)*PER_PAGE

  // fetch events
  const eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const events = await eventRes.json()

  // total events

  const totalRes = await fetch(`${API_URL}/events/count`) 
  const total = await totalRes.json()
  return {
    props: {events, page: +page, total},
  }
}
