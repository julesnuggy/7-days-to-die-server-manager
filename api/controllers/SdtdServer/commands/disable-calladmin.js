module.exports = {

  friendlyName: 'Disable calladmin command',

  description: 'Disable the ingame calladmin command',

  inputs: {
    serverId: {
      type: 'number',
      required: true
    }
  },

  exits: {
    success: {
    },
  },


  fn: async function (inputs, exits) {

    await SdtdConfig.update({ server: inputs.serverId }, { enabledCallAdmin: false });
    await sails.hooks.sdtdcommands.reload(inputs.serverId);
    return exits.success();

  }
};
