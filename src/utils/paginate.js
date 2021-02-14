import _ from "lodash"

export const paginate = (postList, currentPage, perPage) => {
    // for counter of Index[0,1,2,...]
    const startIndex = (currentPage - 1) * perPage
        // return for other Components
    return _(postList).slice(startIndex).take(perPage).value();
}