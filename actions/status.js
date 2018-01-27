var status = module.exports = {
    Unauthorized: function(res) {
        res.status(401).send();
    },

    Accepted: function(res) {
        res.status(200).send();
    },

    BadRequest: function(res) {
        res.status(400).send();
    }
};