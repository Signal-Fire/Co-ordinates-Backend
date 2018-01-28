var status = module.exports = {
    Unauthorized: function(res) {
        res.status(401).send();
    },

    Accepted: function(res, result) {      
        try {
            result.password = "";
            result.created_date = "";
        } catch (e) {

        }
        res.status(200).send(result);
    },

    BadRequest: function(res) {
        res.status(400).send();
    }
};