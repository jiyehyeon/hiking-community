import { Mountain } from "../mongoDB/index.js"

class mountainService{
    static async readData(query ){
        try{
            const mountainName = (query.mountain || null) 
            const mountainLocation = (query.location || null)
            const mountainDifficulty = (query.level || null)
            console.log(mountainName, mountainLocation, mountainDifficulty)
            const totalData = await Mountain.findData(mountainName, mountainLocation,mountainDifficulty)

            var page = Number(query.currentPage || 1)
            const perPage =  5

            const total = totalData.length
            console.log(total)

            const totalPage = Math.ceil(total / perPage)
            if (page > totalPage){
                   page = totalPage
            }
            const currentPageList  = totalData.slice(
                perPage * (page -1),
                perPage * page
            )

            currentPageList[5] = { "maxPage" :totalPage}
            return currentPageList
            

        }
        catch(error)
        {
            throw error
        }
    }
}

export {mountainService}