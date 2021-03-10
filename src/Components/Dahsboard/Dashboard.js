import React from 'react';

const Dashboard = (props) => {
    const {
        handleLogOut,
        email
    } = props

    return(
        <section className="dashboard">
            <nav>
                <h2>Welcome !</h2>
                <button onClick={handleLogOut}>Logout</button>
            </nav>
        </section>
    )

}

export default Dashboard;