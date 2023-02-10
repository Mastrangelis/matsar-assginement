import { Dropdown, Screen } from 'components';

const SearchSuggestions = () => {
    const onSearchClick = (search: string) => {
        console.log(search);
    };

    return (
        <Screen>
            <Dropdown
                header="Popular Searches"
                hasClear={false}
                searches={['Coca cola', 'Coca Cola Zero']}
                onIconClick={onSearchClick}
            />
        </Screen>
    );
};

export default SearchSuggestions;
