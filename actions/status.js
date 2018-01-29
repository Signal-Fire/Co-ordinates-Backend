var status = module.exports = {
    Unauthorized: function(res) {
        res.status(401).send();
    },

    Accepted: function(res, result) {
        res.status(200).send(result);
    },

    BadRequest: function(res) {
        res.status(400).send();
    },

    NotFound: function(res) {
        res.status(404).send();
    }
};