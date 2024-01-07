import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviesSearch(){
    const searches = ['pizza','burger','cookies','juice','biriyani','salad','ice cream','lasanga','pudding','soup']
 
    return(
        <div className="previous-searchs section">
        <h2>Previous Searchs</h2>
        <div className="previous-searchs-container">
            {searches.map((search, index) =>(<div key={index} style={{animationDelay:index * .1 + "s"}} className="search-item">
                {search}
            </div>))}
        </div>
        <div className="search-box">
            <input type="text" placeholder="Search ..." />
            <button className="btn">
                <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
    </div>

    )
}