import React from 'react'
import logo from '../../assets/logo.svg'

const OrganizationFilter = () => {
    return (
        <section>
            <p>
                Filter profiles by organization or company.
            </p>
            <div>
                <div>
                    <div>
                        <img src={logo} />
                    </div>
                    <p>
                        Google
                    </p>
                    <h6>
                        5
                    </h6>
                </div>
            </div>
        </section>
    )
}

export default OrganizationFilter