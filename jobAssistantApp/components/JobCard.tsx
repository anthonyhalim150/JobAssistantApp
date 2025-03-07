// JobCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/JobCardStyles';

interface JobCardProps {
    title: string;
    company: string;
    location: string | null;
    description: string;
    applyLink: string;
    logo?: string | null;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, location, description, applyLink, logo }) => {
    return (
        <View style={styles.cardContainer}>
    {logo ? (
        <Image source={{ uri: logo }} style={styles.logo} />
    ) : (
        <View style={styles.placeholderLogo}>
            <Text style={styles.placeholderText}>{company ? company[0] : '?'}</Text>
        </View>
    )}
    <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.company} numberOfLines={1}>{company}</Text>
        <Text style={styles.location} numberOfLines={1}>{location || 'Location not specified'}</Text>
        <Text style={styles.description} numberOfLines={3}>{description}</Text>
        <TouchableOpacity onPress={() => Linking.openURL(applyLink)}>
            <Text style={styles.applyButton}>Apply Now</Text>
        </TouchableOpacity>
    </View>
</View>


    );
};

export default JobCard;
