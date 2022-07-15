import classes from './Jobs.module.css';
import JobOffer from "../../components/JobOffer/JobOffer"
import ProfileSummary from "../../components/ProfileSummary/ProfileSummary"
import { getUserByUsername } from "../../api/UserProfile/UserProfileApi"
import { useSelector } from 'react-redux';
import { CheckUserPermission } from "../../components/Permissions/CheckUserPermission"
import CompanyService from '../../services/CompanyService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';

const Jobs = () => {

    const [jobOffers, setJobOffers] = useState([]);
    const { register, handleSubmit, formState: { errors }, watch } = useForm({})
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        CompanyService.getAllJobs(auth.username).then(resp => {
            setJobOffers(resp.data.jobOffers)
            console.log(resp.data.jobOffers)
        })
        CompanyService.getAll().then(resp => {
            setCompanies(resp.data.companies)
            console.log(resp.data.companies)
        })
    }, [])


    const onSubmit = handleSubmit((data) => {
        const jobOffer = {
            position: data.position,
            companyId: data.company,
            type: parseInt(data.type),
            date: parseInt(data.date)
        }
        CompanyService.filterJobs(jobOffer).then(resp => {
            setJobOffers(resp.data.jobs)
            console.log(resp.data)
        })
        console.log(jobOffer)
    })

    const [user, setUser] = useState({});
    const auth = useSelector(state => state.loginReducer);

    useEffect(() => {
        async function getUser() {
            const userr = await getUserByUsername(auth.username);
            setUser(userr);
        }
        getUser()
    }, [auth.username])

    function changeColor(event) {
        if (event.target.value != -1) {
            event.target.style.color = 'black';
        } else {
            event.target.style.color = '#616365';
        }
    }

    return (
        <div className={classes.pageWrapper}>
            <div className={classes.profileSummary}>
                <CheckUserPermission role="['ADMIN', 'USER', 'COMPANY']"> <ProfileSummary user={user} /> </CheckUserPermission>
            </div>
            <div className={classes.wrapper}>
                <form onSubmit={onSubmit}>
                    <div className={classes.searchWrapper}>
                        <div className={classes.searchDiv}>
                            <label>Position</label>
                            <div className={classes.searchbar}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon} />
                                <input
                                    {...register("position")}
                                    type="text" placeholder="Position..." className={classes.searchInput}></input>
                            </div>
                        </div>
                        <div className={classes.searchDiv}>
                            <label>Type</label>
                            <div className={classes.searchbar}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon} />
                                <select name="func"
                                    {...register("type")}
                                    className={classes.searchInput} onChange={changeColor}>
                                    <option value="-1">None</option>
                                    <option value="0">Full time</option>
                                    <option value="1">Part time</option>
                                    <option value="2">Internship</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.searchDiv}>
                            <label>Company</label>
                            <div className={classes.searchbar}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon} />
                                <select name="func"
                                    {...register("company")}
                                    className={classes.searchInput} onChange={changeColor}>
                                    <option value="-1">None</option>
                                    {
                                        companies.map((company, i) =>
                                            <option key={i} value={company.id}>{company.username}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className={classes.searchDiv}>
                            <label>Sort by date</label>
                            <div className={classes.searchbar}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.searchIcon} />
                                <select name="func"
                                    {...register("date")}
                                    className={classes.searchInput} onChange={changeColor}>
                                    <option value="-1">None</option>
                                    <option value="0">Latest</option>
                                    <option value="1">Oldest</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.filter}>
                            <button>Filter</button>
                        </div>
                    </div>

                </form>

                <label className={classes.header}>Explore job offers</label>
                <div className={classes.jobOffers}>
                    {
                        jobOffers.map((message, i) =>
                            <div className={classes.jobOffer} key={i}>
                                <JobOffer jobOffer={message}></JobOffer>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Jobs