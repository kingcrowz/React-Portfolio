import Navigation from "./Navigation"
import "../styles/header.css"
const Header = ({ currentPage, handlePageChange}) => {
    return (
        <header>
            <h1>Zachary Zaleski</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}
export default Header