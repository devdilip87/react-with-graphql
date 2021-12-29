import {useState, useEffect} from 'react'

export default function useSortTable(list, defaultKey, defaulOrder) {
    const [sortedList, setSortedList] = useState(list);
    const [sorKey, setSortKey] = useState(defaultKey);
    const [sorOrder, setSortOrder] = useState(defaulOrder);

    const sortByCoulmn = (list, key, order) => {
        setSortedList(list);
        setSortKey(key);
        setSortOrder(order);
    }

    useEffect(() => {
        if (sorOrder === 'asc') {
            sortedList.sort((a,b) => {
                return (a[sorKey]> b[sorKey]) ? 1 : ((b[sorKey] > a[sorKey] ? -1 : 0))
            });
            setSortedList(sortedList);
        }
        else {
            sortedList.sort((a,b) => (a[sorKey] < b[sorKey]) ? 1 : ((b[sorKey] < a[sorKey] ? -1 : 0)));
            setSortedList(sortedList);
        }
        
    },[sorKey, sorOrder, sortedList]);

    return [sortedList, sortByCoulmn];
}