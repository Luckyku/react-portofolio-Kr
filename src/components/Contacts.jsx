import {CONTACT} from "../constants"

const Contacts = () => {
  return (
    <div className="mt-9 pb-4 border-b border-neutral-900">
        <h1 className="my-20 text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="my-4">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contacts