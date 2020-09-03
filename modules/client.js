const es = require('elasticsearch');
const esClient = new es.Client({

    host: 'https://elastic:Pq2aH2QKxBN0oEasCRnOR5BY@040d44f189704dcc82660369dd330059.eastus2.azure.elastic-cloud.com:9243/',
    
    log: 'trace',
    //httpAuth: 'elastic:Pq2aH2QKxBN0oEasCRnOR5BY',
    //protocol: 'https',
    //port: 9243
        
    /*
    host: 'Pq2aH2QKxBN0oEasCRnOR5BY@040d44f189704dcc82660369dd330059.eastus2.azure.elastic-cloud.com',
    auth: {
        apiKey: 'TWxoRlZIUUJaeWRjMmUzVVJWMmc6THZvRkFFRS1TME9zdkJXVFJIQmo4UQ=='
    }
    */
    
    /** For Local Server **/
    /*
    host: 'localhost:9200',
    log: 'trace',
    apiVersion: '7.2',
    */
});

module.exports = esClient;