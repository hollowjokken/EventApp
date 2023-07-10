import NewMeetupForm from "@/components/NewMeetupForm";



const NewMeetupPage = () => {
    const onAddMeetupHandler = (enteredMeetupData) => console.log('data: ', enteredMeetupData)
    
    return (<NewMeetupForm onAddMeetup={onAddMeetupHandler} />)
} 

export default NewMeetupPage;