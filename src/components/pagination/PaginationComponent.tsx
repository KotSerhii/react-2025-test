import { useSearchParams } from "react-router-dom";


const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({pg:'1'});

    return (
        <div>
        <button onClick={() => {
            const pg=query.get('pg');
            if(pg) {
                let currentPage = Number(pg);
                setQuery({pg:(--currentPage).toString()});
                console.log(currentPage);
            }
        }}>prev</button>
            <button onClick={() => {
                const pg=query.get('pg');
                if(pg) {
                    let currentPage = Number(pg);
                    setQuery({pg:(++currentPage).toString()});
                    console.log(currentPage);
                }
            }}>next</button>

        </div>
    );
};

export default PaginationComponent;