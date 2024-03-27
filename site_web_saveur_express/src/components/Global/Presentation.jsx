import './style/Presentation.css'

const Presentation = ({ children, title }) => {
    return (
        <section id='Presentation'>
            <hgroup>
                <h2>{title}</h2>
                <hr />
            </hgroup>
            {children}
        </section>
    )
}

export default Presentation