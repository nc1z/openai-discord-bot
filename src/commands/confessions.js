import { SlashCommandBuilder } from 'discord.js'

module.exports = {
	data: new SlashCommandBuilder().setName('confession').setDescription('Post *anonymous* confessions!')
}