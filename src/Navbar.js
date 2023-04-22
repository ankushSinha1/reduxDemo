import {useSelector} from 'react-redux'
export const Navbar = () => {
    const amount = useSelector(state=> state.amount)
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">BANK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div>
                        <button disabled={true} className="btn btn-primary">Your balance: {amount}</button>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}