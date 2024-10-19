
export default function NavBar(){
    return(
        <div style={styles.navbar}>
            <ul style={styles.content}>
                <li style={styles.button}>
                    <a href="/">Jokes</a>
                </li>
                <li style={styles.button}>
                    <a href="/Dogs">Dogs</a>
                </li>
                <li style={styles.button}>
                    <a href="/Pokemon">Pokemones</a>
                </li>
                <li style={styles.button}>
                    <a href="/Chat">Chat</a>
                </li>
            </ul>
        </div>
    );
}

const styles ={
    navbar:{
        display: 'flex',
        justifyContent: 'space-around',
        width:'100%',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        padding: '0px',
        color: 'black',
        fontSize: '20px'
    },
    content: {
        display: 'flex',
        justifyContent: 'space-around',
        width:'100%',
        background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
        padding: '0px',
    },
    button:{
        padding:'15px'
    },
}
