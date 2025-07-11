import { useState } from 'react';
import '../styles/form.css';

function PersonalInfoSection({ isExpanded = false, expand }) {
    const [values, setValues] = useState(['', '', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="personal-info form-section">
            <div className="section-header">
                <h2>Personal Info</h2>
                <button
                    className={isExpanded ? 'plus-button' : 'minus-button'}
                    onClick={() => {
                        expand(0);
                    }}
                >
                    {isExpanded ? '-' : '+'}
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

function EducationInfoSection({ isExpanded = false, expand }) {
    const [values, setValues] = useState(['', '', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="education-info form-section">
            <div className="section-header">
                <h2>Education Experience</h2>
                <button
                    className={isExpanded ? 'plus-button' : 'minus-button'}
                    onClick={() => {
                        expand(1);
                    }}
                >
                    {isExpanded ? '-' : '+'}
                </button>
            </div>
            {isExpanded && (
                <form className="section-content" onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="degree">Degree</label>
                        <input
                            type="text"
                            id="degree"
                            name="degree"
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
                        <label htmlFor="university">University</label>
                        <input
                            type="text"
                            id="university"
                            name="university"
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
                        <label htmlFor="year">Year</label>
                        <input
                            type="text"
                            id="year"
                            name="year"
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

function PracticalExpSection({ isExpanded = false, expand }) {
    const [values, setValues] = useState(['', '', '', '']);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="practical-exp form-section">
            <div className="section-header">
                <h2>Practical Experience</h2>
                <button
                    className={isExpanded ? 'plus-button' : 'minus-button'}
                    onClick={() => {
                        expand(2);
                    }}
                >
                    {isExpanded ? '-' : '+'}
                </button>
            </div>
            {isExpanded && (
                <form className="section-content" onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label htmlFor="position">Position</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={values[0]}
                            onChange={(e) =>
                                setValues([
                                    e.target.value,
                                    values[1],
                                    values[2],
                                    values[3],
                                ])
                            }
                            required
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="organization">Organization</label>
                        <input
                            type="text"
                            id="organization"
                            name="organization"
                            value={values[1]}
                            onChange={(e) =>
                                setValues([
                                    values[0],
                                    e.target.value,
                                    values[2],
                                    values[3],
                                ])
                            }
                            required
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="from">From</label>
                        <input
                            type="date"
                            id="from"
                            name="from"
                            value={values[2]}
                            onChange={(e) =>
                                setValues([
                                    values[0],
                                    values[1],
                                    e.target.value,
                                    values[3],
                                ])
                            }
                            required
                        />
                    </div>
                    <div className="input-row">
                        <label htmlFor="to">To</label>
                        <input
                            type="date"
                            id="to"
                            name="to"
                            value={values[3]}
                            onChange={(e) =>
                                setValues([
                                    values[0],
                                    values[1],
                                    values[2],
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

function FormArea() {
    const [expandedId, setExpandedId] = useState(0);
    const handleExpansionState = (id) => {
        setExpandedId(id);
    };

    return (
        <div className="form-area">
            <PersonalInfoSection
                isExpanded={expandedId === 0}
                expand={handleExpansionState}
            />
            <EducationInfoSection
                isExpanded={expandedId === 1}
                expand={handleExpansionState}
            />
            <PracticalExpSection
                isExpanded={expandedId === 2}
                expand={handleExpansionState}
            />
        </div>
    );
}

export default FormArea;
