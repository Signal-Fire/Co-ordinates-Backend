var status = module.exports = {
    Unauthorized: function(res) {
        res.status(404).send();
    },

    Accepted: function(res) {
        res.status(200).send();
    },

    BadRequest: function(res) {
        res.status(400).send();
    }
};