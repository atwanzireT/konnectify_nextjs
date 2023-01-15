import { useRouter } from "next/router"

export default function Services(){
    const router = useRouter()
    const service_id = router.query.serviceId
    return (
        <>
        <h1>Service {service_id}</h1>
        </>
    )
}