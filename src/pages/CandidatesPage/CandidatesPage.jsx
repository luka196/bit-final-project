
import React, {useContext} from 'react'
import Candidate from '../../components/Candidate/Candidate'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import "./candidatesPage.scss"
import { dataContext } from '../../context'
import {Link} from "react-router-dom"
const CandidatesPage = () => {
    const {candidates} = useContext(dataContext)
    return (
        <>
            <div className="candidatesPage">
                CandidatesPage
                <Header />
                <div>
                    <h2>Candidates</h2>
                    <Search />
                </div>
                {candidates?.map((e) => <Link to={`/single-candidates-page/${e.id}`}><Candidate data={e}/></Link>)}
                <Footer/>
            </div>
        </>
    )
}


        <div id="candidate">
          <h2>Candidates</h2>
          <Search />
        </div>  
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
        <Footer />
      </div>
    </>
  );
};

export default CandidatesPage;
