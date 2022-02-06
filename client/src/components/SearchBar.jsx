import { Form, Button } from "react-bootstrap";

function SearchBar({
    setSearchText,
    onClickRefresh
}) {
    const onChangeSearchText = (event) => {
        setSearchText(event.target.value);
    };

    const onKeyPressSearchText = (event) => {
        if (event.charCode === 13) {
            onClickRefresh();
        }
    }

    return (
        <div className="d-flex justify-content-around">
            <Form.Control type="text" className="m-2" placeholder="Search for movies you want..."
                onChange={onChangeSearchText}
                onKeyPress={onKeyPressSearchText}
            />
            <Button variant="primary" className="me-2" onClick={onClickRefresh}>Search</Button>
            <Button variant="success" className="m-2" onClick={onClickRefresh}>Refresh</Button>
        </div>
    )
}
export default SearchBar;