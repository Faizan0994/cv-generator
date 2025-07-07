import { useState } from 'react';
import '../styles/form.css';

function PersonalInfoSection({ isExpanded = false }) {
    const [values, setValues] = useState(['', '', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="personal-info form-section">
            <div className="section-header">
                <h2>Personal Info</h2>
                <button className={isExpanded ? 'plus-button' : 'minus-button'}>
                    {isExpanded ? '+' : '-'}
                </button>
            </div>
            {isExpanded && (
                <form className="section-content" onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="fullName">Name</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={values[0]}
                            onChange={(e) =>
                                setValues([
                                    e.target.value,
                                    values[1],
                                    values[2],
                                ])
                            }
                            required
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="userEmail">E-mail</label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            value={values[1]}
                            onChange={(e) =>
                                setValues([
                                    values[0],
                                    e.target.value,
                                    values[2],
                                ])
                            }
                            required
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="userPhone">Phone</label>
                        <input
                            type="text"
                            id="userPhone"
                            name="userPhone"
                            value={values[2]}
                            onChange={(e) =>
                                setValues([
                                    values[0],
                                    values[1],
                                    e.target.value,
                                ])
                            }
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
}

export default PersonalInfoSection;
