import React, {useState} from 'react';
import styles from './HomePage.module.css';
import MenuBar from "./MenuBar";
import EmailForm from "./EmailForm";
import EmailList from "./EmailList";
import {getDefaultProvider} from "../services/providerService";

const HomePage = () => {
    const [providerId, setProviderId] = useState(getDefaultProvider().id);
    return (
        <div>
            <MenuBar providerId={providerId} onChange={newProviderId => setProviderId(newProviderId)}/>
            <main className={styles.content}>

                <h2>Perform Actions on Behalf of Authenticated User</h2>

                <h3>Send Email</h3>
                <div className="inner-container">
                    <EmailForm/>
                </div>

                <h3>Retrieve Email</h3>
                <div className="inner-container">
                    <EmailList/>
                </div>

            </main>
        </div>
    );
};

export default HomePage;