// const Contact = () => {
//     return (
//         <>
//             <h1>Contact Page</h1>
//         </>
//     )
// }

// export default Contact;

const Contact = (props) => {
    return (
        <>
            <h1>Contact Page {props.company_name}</h1>
        </>
    )
}

export default Contact;