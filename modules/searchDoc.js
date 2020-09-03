const esClient = require('./client');
const searchDoc = async function(indexName, mappingType, payload){
    return await esClient.search({
        index: indexName,
        type: mappingType,
        body: payload
    });
}

module.exports = searchDoc;

/**
 * Example
 */
async function test(){
    /**
     * Full search query
     */
    const body = {
        query: {
            match: {
                "title": "Learn"
            }
        }
    }
    /**
     * Search as you type query
     */
    const body2 = {
        query: {
            match_phrase_prefix: {
                "title": "Lea"
            }
        }
    }

    try {
        const resp = await searchDoc('blog', 'ciphertrick', body);
        // Search as you type
        // const resp = await searchDoc('blog', 'ciphertrick', body2);
        console.log(resp);
    } catch (e) {
        console.log(e);
    }
}


//test();