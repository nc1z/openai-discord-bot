import { SlashCommandBuilder } from 'discord.js'

export default {
	data: new SlashCommandBuilder().setName('confession').setDescription('Post *anonymous* confessions!')
}